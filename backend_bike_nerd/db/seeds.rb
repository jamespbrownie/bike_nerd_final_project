# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

james = User.create(name: "James", username: "jamespbrownie@gmail.com", profile_icon: "https://cdn.shoplightspeed.com/shops/626275/files/18687152/stickers-northwest-sticker-smiley-face.jpg", bio: "I love bicycles!!! They are so fun!!!", password: "12345ABC!")

user2 = User.create(name: "John Doe", username: "johndoe", profile_icon: "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/ogre.png", bio: "Personally, I find bicycles to be pretty cool", password: "54321ABC!")