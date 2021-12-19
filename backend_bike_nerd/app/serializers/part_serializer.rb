class PartSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :specs, :notes, :part_type, :frame, :user_id
  
  # has_many :build_parts
end
