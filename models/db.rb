# frozen_string_literal: true

# Database methods
module Db
  def query(sql, args)
    conn = PG.connect(dbname: settings.database[:database])
    conn.exec_params(sql, args)
  end
end
