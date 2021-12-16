
# users
james = User.create(name: "James", username: "jamespbrownie@gmail.com", profile_icon: "https://cdn.shoplightspeed.com/shops/626275/files/18687152/stickers-northwest-sticker-smiley-face.jpg", bio: "I love bicycles!!! They are so fun!!!", password: "12345ABC!")

user2 = User.create(name: "John Doe", username: "johndoe", profile_icon: "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/ogre.png", bio: "Personally, I find bicycles to be pretty cool", password: "54321ABC!")


#parts
vintage_rockhopper_frame = Part.create(name:"vintage Specialized Rockhopper frame", image:"https://store.bicycleczar.com/v/vspfiles/photos/10201069-2.jpg?v-cache=1604251954", specs:'large frame, need to measure sizes. fits 26x2.5 tires"', notes:"coworker at Bcycle found this frame in a dumpster, brought it in, and it was the first frame I've ever built up! it has been through a couple different iterations", part_type:"frame", frame:true, user_id:james.id)

trek_checkpoint_frame = Part.create(name:"trek checkpoint frame", image:"https://files.bikeindex.org/uploads/Pu/188151/large_IMG_0591.JPG", specs:'trek checkpoint al4 2019, grey-blue and coral-pink, size 56, aluminum', notes:"bought this with my employee discount at BCycle. i wish it had slightly wider tire clearance, but its certainly fast!", part_type:"frame", frame:true, user_id:james.id)

single_speed_frame = Part.create(name:"single speed frame", image:"https://m.media-amazon.com/images/I/41VlVIgU-KL._AC_SX425_.jpg", specs:'steel, horizontal dropouts, size 56', notes:"bought at Yellow Bike for like $150, despite being cheap it just might be the frame i use the most", part_type:"frame", frame:true, user_id:james.id)
##end of frames

wald_basket = Part.create(name:"wald 137 front basket", image:"https://m.media-amazon.com/images/I/61lperAm3PL._AC_SL1006_.jpg", specs:'black, 15x10x4.75"', notes:"it has carried many things for me. pairs great with my cargo net", part_type:"front basket", frame:false, user_id:james.id)

maxxis_dth_tires = Part.create(name:"maxxis dth tires 26x2.5 tan-wall", image:"https://cdn.shopify.com/s/files/1/0364/0324/9287/products/DTHSkinwallThreeQtr_5000x.jpg?v=1611146706", specs:'26x2.5, tan wall', notes:"these tires are thick enough to shred trails at low PSI, but also have smooth enough tread for commuting on road", part_type:"tires", frame:false, user_id:james.id)

clown_horn = Part.create(name:"clown horn", image:"https://m.media-amazon.com/images/I/41QOCwkAY+L._SS400_.jpg", specs:'it meets the rigorous standards for clown horns', notes:"sounds like a clown horn. honk honk!", part_type:"horn", frame:false, user_id:james.id)

stem_bag = Part.create(name:"swift industries sidekick stem bag", image:"https://33gg0o20rbt128rjvfx2pwb1-wpengine.netdna-ssl.com/wp-content/uploads/2021/10/SWIFT_8_21_SWIFT_8_21_Sidekick-VX21-BLK_8131_WEB.jpg", specs:'black x-pac fabric, can fit a standard bike water bottle', notes:"great place to keep my phone, keys, and more while riding", part_type:"bag", frame:false, user_id:james.id)

cellphone_holster = Part.create(name:"black star bags phone holster", image:"https://cdn.shopify.com/s/files/1/0292/1241/products/red_cell_phone_holster_1.1.jpg?v=1385564892", specs:'yellow, waterproof, velcro fastener, my iphone 11 with cardholder fits perfectly', notes:"the handle opens the velcro fastener pefectly. great phone bag", part_type:"bag", frame:false, user_id:james.id)

swift_rando_pocket = Part.create(name:"swift rando pocket", image:"https://33gg0o20rbt128rjvfx2pwb1-wpengine.netdna-ssl.com/wp-content/uploads/2021/10/SWIFT_8_21_Rando-Pocket-VX21-Dark-Green_8114_WEB.jpg", specs:'blue, velcro fasteners on back, a bit small for a phone', notes:"not as easy to open as my black star phone holster, and too small for my phone. i keep my musguard rollable fenders in here, and theres even space for a mask inside the rolled up fenders", part_type:"bag", frame:false, user_id:james.id)

cambium_saddle = Part.create(name:"brooks cambium saddle", image:"https://m.media-amazon.com/images/I/61KNXWYkeQL._AC_SL1460_.jpg", specs:'c15, black, with center cutout', notes:"way more comfortable than a stock saddle", part_type:"saddle", frame:false, user_id:james.id)

esi_grips_red = Part.create(name:"esi extra chunky grips, red", image:"https://esigrips.com/wp-content/uploads/2020/09/ExtraChunkyRed.jpg", specs:'extra chunky, red', notes:"i love the way these grips feel", part_type:"grips", frame:false, user_id:james.id)

esi_grips_blue = Part.create(name:"esi extra chunky grips, blue", image:"https://m.media-amazon.com/images/I/71FfQN-v0FL._AC_SX679_.jpg", specs:'extra chunky, blue', notes:"i love the way these grips feel", part_type:"grips", frame:false, user_id:james.id)

gatorskins = Part.create(name:"gatorskins, 700x32c", image:"https://cdn.mos.cms.futurecdn.net/gxhUbZB8aAWjnEZXNDw3zi-768-80.jpg", specs:'700x32c', notes:"they've lasted me for years. not 100% puncture-proof, but pretty close!", part_type:"tires", frame:false, user_id:james.id)

teravail_cannonballs = Part.create(name:"terravail cannonballs, 700x38c", image:"https://media.alltricks.com/hd/15345275ec288a9f0de01.62506209.jpg", specs:'700x38c, small knobby tread', notes:"they're ok for road, and i haven't ridden enough gravel to know how they handle there", part_type:"tires", frame:false, user_id:james.id)

stamp_pedals_blue = Part.create(name:"crankbros stamp pedals, blue", image:"https://nsmb.com/media/images/Crankbrothers_Stamp_1_NSMB_AndrewM_1.original.jpg", specs:'large, blue, stamp 1', notes:"the cheapest offering from crank bros, but they feel great to me. i like the large platform size too", part_type:"pedals", frame:false, user_id:james.id)

stamp_pedals_red = Part.create(name:"crankbros stamp pedals, red", image:"https://media.alltricks.com/hd/5c07b79b1ac0f.jpg", specs:'large, red, stamp 1', notes:"the cheapest offering from crank bros, but they feel great to me. i like the large platform size too", part_type:"pedals", frame:false, user_id:james.id)

old_spd_pedals = Part.create(name:"spd pedals", image:"https://cdn.shoplightspeed.com/shops/615073/files/7119800/pedals-clipless-pd-m540-black.jpg", specs:'shimano SPD', notes:"my first clip-in (clipless? whatever) pedals, they've served me well", part_type:"pedals", frame:false, user_id:james.id)

vp_pedals = Part.create(name:"vp pedals", image:"https://images.performancebike.com/cdn-cgi/image/width=950/images/large/bikes/vpcomponents/vp-001_black.jpg", specs:'aluminum, black, with pins', notes:"the pins provide great grip", part_type:"pedals", frame:false, user_id:james.id)

supa_wide_bars = Part.create(name:"supa-wide bars", image:"https://ridefarr.com/wp-content/uploads/2020/03/SUPA-WIDE-HANDLEBAR-14.9.20_1200x1200_1a.jpg", specs:'aluminum, smooth black, 700m wide, 120mm drop, 65mm reach, 20 degree flare', notes:"these bars feel so comfy", part_type:"bars", frame:false, user_id:james.id)

checkpoint_stock_bars = Part.create(name:"checkpoint stock bars", image:"https://cdn.shopify.com/s/files/1/0604/3445/products/drop_bars_318.jpg?v=1509986368", specs:'aluminum, matte black, 43cm wide', notes:"they came with my checkpoint. decent road bars", part_type:"bars", frame:false, user_id:james.id)


#builds
basket_bike = Build.create(name: "basket bike", image:"https://i.pinimg.com/originals/29/ce/6d/29ce6dcfc523d716a0ef3630da02b519.jpg", notes:"its a commuter, a grocery getter, and with 2.5inch tires it handles trails pretty well too!", current_build:true, user_id:james.id )

single_speed = Build.create(name: "single speed", image:"https://cdn.shopify.com/s/files/1/1109/6048/products/media_10e52e25-95e1-4a10-985c-caca7013c464_large.jpg?v=1635370889", notes:"my fastest and lightest bike, perfect for hopping over to the gym. weakness: hills are a pain with a 44x17 gear ratio", current_build:true, user_id:james.id )

trek_checkpoint_gravel = Build.create(name: "trek checkpoint - gravel", image:"https://s3.amazonaws.com/www.bikerumor.com/wp-content/uploads/2021/09/29225603/Trek-Checkpoint-SL6-full-.jpeg", notes:"i need to take this thing on some actual gravel instead of using it like a road bike. the extra wide bars make it feel sturdy. the road gears are a little too big for trails, might eventaully upgrade to a gravel groupset", current_build:true, user_id:james.id )

trek_checkpoint_road = Build.create(name: "trek checkpoint - road", image:"https://trek.scene7.com/is/image/TrekBicycleProducts/CheckpointSL5_21_32558_B_Primary?$responsive-pjpg$&cache=on,on&wid=800&hei=600", notes:"rode my first century on this puppy. everything stock except for brooks cambium saddle. upgraded the frame to gravel after the century to make it more versatile", current_build:false, user_id:james.id)

#partbuilds 

pb1 = BuildPart.create(basket_bike.id, vintage_rockhopper_frame.id)
pb2 = BuildPart.create(basket_bike.id, wald_basket.id)
pb3 = BuildPart.create(basket_bike.id, maxxis_dth_tires.id)
pb4 = BuildPart.create(basket_bike.id, clown_horn.id)
pb5 = BuildPart.create(basket_bike.id, cellphone_holster.id)
pb6 = BuildPart.create(basket_bike.id, swift_rando_pocket.id)
pb7 = BuildPart.create(basket_bike.id, esi_grips_blue.id)
pb8 = BuildPart.create(basket_bike.id, stamp_pedals_blue.id)

pb9 = BuildPart.create(single_speed.id, single_speed_frame.id)
pb10 = BuildPart.create(single_speed.id, vp_pedals.id)
pb11 = BuildPart.create(single_speed.id, stem_bag.id)
pb12 = BuildPart.create(single_speed.id, esi_grips_red.id)
pb13 = BuildPart.create(single_speed.id, gatorskins.id)

pb14 = BuildPart.create(trek_checkpoint_gravel.id, trek_checkpoint_frame.id)
pb15 = BuildPart.create(trek_checkpoint_gravel.id, cambium_saddle.id)
pb16 = BuildPart.create(trek_checkpoint_gravel.id, old_spd_pedals.id)
pb17 = BuildPart.create(trek_checkpoint_gravel.id, teravail_cannonballs.id)
pb18 = BuildPart.create(trek_checkpoint_gravel.id, supa_wide_bars.id)

pb19 = BuildPart.create(trek_checkpoint_road.id, trek_checkpoint_frame.id)
pb20 = BuildPart.create(trek_checkpoint_road.id, old_spd_pedals.id)
pb21 = BuildPart.create(trek_checkpoint_road.id, cambium_saddle.id)
pb21 = BuildPart.create(trek_checkpoint_road.id, checkpoint_stock_bars.id)




