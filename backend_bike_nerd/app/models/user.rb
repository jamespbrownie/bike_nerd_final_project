class User < ApplicationRecord
    has_secure_password
    has_many :parts
    has_many :builds 
    has_many :build_parts, through: :builds
end
