# frozen_string_literal: true

# User methods
module User
  def user_exist?(username)
    sql = 'SELECT username FROM users WHERE username = $1'
    res = query(sql, [username])
    !res.ntuples.zero?
  end

  def correct_password?(data)
    sql = 'SELECT password FROM users WHERE username = $1'
    res = query(sql, [data['login']])
    password = BCrypt::Password.new(res[0]['password'])
    password == data['password']
  end

  def allowed_chars?(input)
    input =~ /^[a-zA-Z0-9-]*$/
  end

  def valid_login_inputs?(data)
    allowed_chars?(data['login']) && allowed_chars?(data['password'])
  end

  def empty_inputs?(data)
    data['login'].empty? || data['password'].empty? ||
      (!data['password2'].nil? && data['password2'].empty?)
  end

  def check_inputs_length(data)
    data['login'].length > 50 || data['password'].length > 60 ||
      (!data['password2'].nil? && data['password2'].length > 60)
  end

  def user_session(data)
    session[:username] = data['login']
    { authenticated: true, message: 'Użytkownik zalogowany',
      username: data['login'] }
  end

  def send_message(message, action)
    res = { message: message }
    res[action] = false
    res
  end

  def check_login(data)
    if empty_inputs?(data) then 'Puste pole formularza'
    elsif check_inputs_length(data) then 'Maksymalnie 50 znaków'
    elsif !valid_login_inputs?(data) then 'Wprowadzono niedozwolone znaki'
    elsif !user_exist?(data['login']) then 'Użytkownik nieznany'
    elsif !correct_password?(data) then 'Złe hasło'
    end
  end

  def login_user(data)
    message = check_login(data)
    message ? send_message(message, 'authenticated') : user_session(data)
  end

  def passwords_equals?(password, password2)
    password == password2
  end

  def encrypt_password(password)
    BCrypt::Password.create(password)
  end

  def add_new_user(data)
    password = encrypt_password(data['password'])
    sql = 'INSERT INTO users(username,password,created_on) VALUES ($1,$2,NOW())'
    query(sql, [data['login'], password])
    { register: true, message: 'Użytkownik dodany.',
      authenticated: true, username: data['login'] }
  end

  def valid_register_inputs?(data)
    allowed_chars?(data['login']) &&
      allowed_chars?(data['password']) &&
      allowed_chars?(data['password2'])
  end

  def check_register(data)
    if empty_inputs?(data) then 'Puste pole formularza'
    elsif check_inputs_length(data) then 'Maksymalnie 50 znaków'
    elsif !valid_login_inputs?(data) then 'Wprowadzono niedozwolone znaki'
    elsif user_exist?(data['login'])
      'Użytkownik o takiej nazwie już istnieje'
    elsif !passwords_equals?(data['password'], data['password2'])
      'Twoje hasła są różne'
    end
  end

  def register_user(data)
    message = check_register(data)
    message ? send_message(message, 'register') : add_new_user(data)
  end

  def authenticated?
    request.session[:username].to_s == session[:username].to_s &&
      !session[:username].nil?
  end
end
