class BuildSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :notes, :current_build, :user_id#, :parts

  has_many :build_parts
  has_many :parts, through: :build_parts
end
