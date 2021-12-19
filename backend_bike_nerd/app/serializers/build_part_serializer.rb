class BuildPartSerializer < ActiveModel::Serializer
  attributes :id, :build_id, :part_id, :part
  # belongs_to :build
  # belongs_to :part
end
