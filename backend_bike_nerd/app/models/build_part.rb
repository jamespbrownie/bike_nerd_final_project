class BuildPart < ApplicationRecord
    belongs_to :build
    belongs_to :part
end
