class Build < ApplicationRecord
    has_many :buildparts
    has_many :parts, through: :buildparts
end
