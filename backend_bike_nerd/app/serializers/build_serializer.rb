class BuildSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :notes, :current_build, :user_id
end
