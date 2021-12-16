class PartSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :specs, :notes, :part_type, :frame, :user_id
  has_many :build_parts
  
  # belongs_to :build, through: :build_parts
end
