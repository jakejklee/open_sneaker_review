class ProjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :slug, :ave_score

  has_many :projectreviews
end
