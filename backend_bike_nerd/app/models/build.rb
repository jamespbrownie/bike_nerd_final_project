class Build < ApplicationRecord
    belongs_to :user
    has_many :build_parts
    has_many :parts, through: :build_parts
end
