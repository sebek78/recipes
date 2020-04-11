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

  def login_user(data)
    if user_exist?(data['login'])
      if correct_password?(data)
        { authenticated: true, message: 'Użytkownik zalogowany' }
      else
        { authenticated: false, message: 'Złe hasło' }
      end
    else
      { authenticated: false, message: 'Użytkownik nieznany' }
    end
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
    { register: true, message: 'Użytkownik dodany.' }
  end

  def register_user(data)
    if !user_exist?(data['login'])
      if passwords_equals?(data['password'], data['password2'])
        add_new_user(data)
      else
        { register: false, message: 'Twóje hasła są różne' }
      end
    else
      { register: false, message: 'Użytkownik o takiej nazwie już istnieje' }
    end
  end
end
