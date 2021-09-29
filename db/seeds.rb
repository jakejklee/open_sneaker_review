# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

projects = Project.create([
    {
        name:"Nike",
        image_url:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c4f3.png"
    },
    {
        name:"Adidas",
        image_url:"https://toppng.com/uploads/preview/adidas-logo-png-adidas-11563653245c6zmdnvsld.png"
    },
    {
        name:"New Balance",
        image_url:"https://w7.pngwing.com/pngs/586/211/png-transparent-new-balance-logo-sneakers-clothing-sneakers-miscellaneous-angle-text.png"
    },

])

projectreviews = Projectreview.create([
    {
        title:'Jordan 1 Low',
        description:'I enjoy wearing them',
        score:5,
        project:projects.first
    },
    {
        title:'React Flyknit',
        description:'I enjoy running with them but little bit tight',
        score:4,
        project:projects.first
    },
    {
        title:'New Balance 920',
        description:'They are stylish',
        score:5,
        project:projects.third
    }
])