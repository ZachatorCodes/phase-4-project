# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts '____________________'
puts 'Seeding Trails 🥾'

Trail.create!([
  {
    trail_name: "Big South Trail",
    length: 13.7,
    elevation: 1696,
    location: "Roosevelt National Forest",
    difficulty: 3
  },
  {
    trail_name: "Arthur's Rock Trail",
    length: 3.2,
    elevation: 1099,
    location: "Lory State Park",
    difficulty: 2
  },
  {
    trail_name: "Sky Pond via Glacier Gorge Trail",
    length: 8.6,
    elevation: 1771,
    location: "Rocky Mountain National Park",
    difficulty: 3
  },
  {
    trail_name: "Anne U. White Trail",
    length: 3.2,
    elevation: 485,
    location: "Boulder County Parks and Open Space",
    difficulty: 1
  },
  {
    trail_name: "Medicine Bow Peak via Lakes Trail Loop",
    length: 6.7,
    elevation: 1712,
    location: "Medicine Bow-Routt National Forest",
    difficulty: 3
  },
  {
    trail_name: "Mount Ellen Peak Trail",
    length: 5.6,
    elevation: 1843,
    location: "Mount Ellen-Blue Hills Wilderness Study Area",
    difficulty: 3
  },
  {
    trail_name: "Grays and Torreys Peak",
    length: 8.1,
    elevation: 3599,
    location: "Arapaho National Forest",
    difficulty: 3
  },
  {
    trail_name: "Zion Narrows: Bottom Up to Big Springs",
    length: 8.9,
    elevation: 695,
    location: "Zion National Park",
    difficulty: 3
  },
  {
    trail_name: "Zebra Canyon",
    length: 5.2,
    elevation: 377,
    location: "Grand Staircase - Escalante National Monument",
    difficulty: 2
  },
  {
    trail_name: "The Golden Cathedral Trail",
    length: 9.4,
    elevation: 1446,
    location: "Glen Canyon National Recreation Area",
    difficulty: 2
  }
])

puts 'Done Seeding Trails ✅'
puts '____________________'
puts 'Seeding Users 🧑'

User.create!([
  {
    first_name: "Chunky",
    last_name: "Bunky",
    email: "chunkybunky@bunk.com",
    username: "ChunkyBunky",
    password: "bunkypassword123",
    password_confirmation: "bunkypassword123",
    bio: "I'm a cat who's all about that!"
  },
  {
    first_name: "Banjo",
    last_name: "Kazooie",
    email: "bearandbird@n64.com",
    username: "BearAndBird",
    password: "bestbeararound64!",
    password_confirmation: "bestbeararound64!",
    bio: "I like to think I'm better than Mario."
  },
  {
    first_name: "Test",
    last_name: "Test",
    email: "test@gmail.com",
    username: "test",
    password: "test",
    password_confirmation: "test",
    bio: "I am the test user!"
  }
])

puts 'Done Seeding Users ✅'
puts '____________________'
puts 'Seeding Reviews 📝'

Review.create!([
  {
    trail_id: 1,
    user_id: 1,
    rating: 8,
    comment: "Super cool trail!"
  },
  {
    trail_id: 1,
    user_id: 2,
    rating: 3,
    comment: "I give it a meh >:("
  },
  {
    trail_id: 1,
    user_id: 3,
    rating: 10,
    comment: "THIS IS THE BEST TRAIL I'VE EVER DONE"
  }
])

puts 'Done Seeding Reviews ✅'
puts '____________________'