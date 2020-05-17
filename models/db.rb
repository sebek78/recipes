# frozen_string_literal: true

# Database methods
module Db
  def query(sql, args)
    conn = if ENV['RACK_ENV'] == 'production'
             PG.connect(ENV['DATABASE_URL'])
           else
             PG.connect(dbname: 'test_db')
           end
    conn.exec_params(sql, args)
  rescue PG::Error => e
    puts e.message
  ensure conn&.close
  end
end
