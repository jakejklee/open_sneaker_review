class Project < ApplicationRecord
    has_many:projectreviews

    before_create :slugify

    def slugify
        self.slug = name.parameterize
    end

    def ave_score
        return 0 unless projectreviews.count.positive?

        projectreviews.average(:score).round(2).to_f
    end


end
