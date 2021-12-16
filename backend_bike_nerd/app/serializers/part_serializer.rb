class PartSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :specs, :notes, :part_type, :frame, :user_id
end
