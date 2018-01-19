var playerName = "";//localStorage.getItem("playerName");
var roomArray = [
	{
		title:'Entrance of the Goblin Cave',
		text:'You walk slowly into the Goblin Cave BANG the wall crumples down and covers your only escape, the room fills with darkness but there is a torch on fire in the centre of the room, this can help you on your quest. ',
		choices:[
			{
				text:'Grab torch from the wall',
				index:1
			}
		]
	},
	{
		title:'The Torch',
		text:'You grab the torch and begin your descent into the dark barrow. You see relics on the wall from the great war of the pale lands.',
		choices:[
			{
				text:'Study the Relics of the Great War',
				index:2
			},
			{
				text:'Carry on exploring',
				index:3
			}
		]
	},
	{
		title:'Study the Relics of the Great War',
		text:'You see crowns and armour from what was left of the Great War, the armour is badly damaged and useless to try on but there is a shining light from under all the armour, you move all the junk and see its a powerful sword, you grab and put it on your back and carry on with your quest.',
		choices:[
			{
				text:'Go to the second room',
				index:3
			}
		]
	},
	{
		title:'Carry on exploring',
		text:'You carry on walking down the dark barrows of Champion Pyromancer Kord, this man was able to create a storm of blazing fire what could destroy cities in a matter of seconds. you need to get his knowledge so you can stop the apocalypse what threaten the land of Kalern. You trip on a rock and your torch rolls out of your hands and falls off the ledge, the room is then lit up by the torch what has landed into a pile of hay. there is two doors covered in gold in front of you. One of those doors leads you to the goblin mines and the other is the armoury of Kord’s army',
		choices:[
			{
				text:'Door to the Goblin Mines',
				index:4
			},
			{
				text: 'Door to Kords Armoury',
				index: 5
			}
		]
	},
	{
		title:'Door to the Goblin Mines',
		text:'You pass through the door to the Goblin mines, you hear screams of laughter ahead of you, a group of goblins ran towards and stop a few steps away from you. Their leader hisses at you and says “Dirty Adventurer wants Masters treasure *hisses* leave us or we will kill you.',
		choices:[
			{
				text: 'Run for your life',
				index: 8
			},
			{
				text: 'Fight off the Goblins',
				index: 7
			}
		]
	},
	{
		title:'Door to Kords Armoury',
		text:'You sprint out of the room with goblins laughing at your horrible performance and the door slams shut behind you. Now you are faced again with both doors.',
		choices:[
			{
				text:'Door to the Goblin Mines',
				index:4
			}
		]
	},
	{
		title:'Fight off the Goblins',
		text:'You run towards the goblins screaming, everything just stops and you think this is your first proper fight since the death of your parents back in Kalern. You were walking home with your parents after the firework show and a mugger comes and use a spell what puts you into a trance and you watch helplessly as your parents are mugged and stabbed to death.',
		choices:[
			{
				text: 'Fight off and defeat the evil goblins',
				index: 8
			}
		]
	},
	{
		title:'Door to Kords Armoury',
		text:'You slay all the goblins and you stand their feeling proud to have won the battle but the quest is not over yet. You walk into the Goblin mine and look around. Theres minecarts speeding past filled with gold, silver and diamonds but you arent here for that or are you???',
		choices:[
			{
				text: 'Try to grab the loot from the speeding minecart',
				index: 9
			},
			{
				text: 'Ignore the minecart and carry on walking',
				index: 10
			}
		]
	},
	{
		title:'Death',
		text:'The Goblins get the upper hand and slice you down leaving nothing but your head what is then thrown down into the pool of lava ',
		choices:[
			{
				text: 'Game Over',
				index: 22
			}
		]
	},
	{
		title:'Fight off the Goblins',
		text:'You reach out to grab the loot and slip into another minecart but this one is empty you question it while getting up in the minecart and you look around the suddenly you work out why you are in an empty minecart and your last words are “For goodness…” and you are sent flying into a pool of lava. “Greed is a bottomless pit which exhausts the person in an endless effort to satisfy the need without ever reaching satisfaction”',
		choices:[
			{
				text: 'Game Over',
				index: 22
			}
		]
	},
	{
		title:'Ignore the minecart and carry on walking',
		text:'You are not distracted by the shiney loot and carry on exploring the mine, more goblins scream from and a ledge above and start shooting arrows at you. You run to cover and see a bow and a magic staff, when you look to see how many goblins there are you see a rope what holds a box of rocks above them, what will you do.',
		choices:[
			{
				text: 'Grab the Bow',
				index: 11
			},
			{
				text: 'Cut the rope using the sword',
				index: 12
			},
			{
				text: ' Grab the Staff',
				index: 13
			},
			{
				text:'Nothing',
				index:14
			}
		]
	},
	{
		title:'Grab the Bow',
		text:'You grab the bow but there is no arrows with it SUDDENLY you are shot in the head and you fall off the ledge. “Life is hard, after all it does kill you”',
		choices:[
			{
				text: 'Game Over',
				index: 22
			}
		]
	},
	{
		title:'Cut the rope using the sword',
		text:'You dodge the oncoming arrows, one arrow pieces your skin but you keep running, you cut the rope holding all the rocks and they come crashing down on those dirty goblins, more goblins come running and you see a door leading to a different room... RUNN!',
		choices:[
			{
				text: 'RUN TO THE DOOR!',
				index: 16
			},
		]
	},
	{
		title:'Grab the Staff',
		text:'You use the the magic staff what Kord used before he gained his powers, you are shot in the leg an arrow but keep going, the goblins burn to death but more goblins come running and you see a door leading to a different room... RUNN!',
		choices:[
			{
				text: 'RUN TO THE DOOR!',
				index: 16
			}
		]
	},
	{
		title:'Nothing: The Cave',
		text:'You are shot down by arrows and knives, the goblins win and dance around your dead corpse.',
		choices:[
			{
				text: 'Game Over',
				index: 22
			}
		]
	},
	{
		title:'Nothing',
		text:'You enter the armoury and look around, there are a few goblins sitting at a table dancing and laughing but they turn and spot you',
		choices:[
			{
				text: 'Fight Them',
				index: 17
			},
			{
				text: 'Dont fight them',
				index:18
			}
		]
	},
	{
		title:'Nothing: The Armoury',
		text:'You enter the armoury and look around, there are a few goblins sitting at a table dancing and laughing but they turn and spot you',
		choices:[
		{
			text: 'Fight Them',
			index: 17
		},
		{
			text: 'Dont fight them',
			index:19
		}
	]
},
	{
		title:'Fight them',
	text:'You destroy all the goblins in your way but there is giant beast walking towards you, its the right hand man of Kord and it has come for blood, you can’t fight this thing alone, theres a door into a different room or the door behind you, what will you go for.',
	choices:[
		{
			text: 'Run back to the first room',
			index: 6
		},
		{
			text: 'RUN TO THE DOOR!',
			index:18
		}
	]
},
	{
		title:'Fight them',
	text:'You are hurt by the Giant but nothing what can stop you from getting the knowledge you need to save the world. There is a huge throne with a giant skeleton on it, the skeleton is filled with fire and grabs the sword on his sword as he gets up '+playerName+' \“I have been waiting for your appearance, tell me how are your parents\”',
	choices:[
		{
			text: 'Say “How did you know about them…?”',
			index: 20
		},
		{
			text: 'Say “I will get the knowledge I need to save the world”',
			index:20
		}
	]
},
	{
		title:'Dont Fight them',
	text:'They come running towards and start tearing you apart limb by limb till there is nothing left of you',
	choices:[
		{
			text: 'Game Over',
			index: 22
		}
	]
},
	{
		title:'Talking to Kord',
	text:'Kord lets out a roar of flames bouncing off the walls and just dodging you he says “I was the puppet master of your parents death '+playerName+' but this will be more exciting. He leaps towards you',
	choices:[
		{
			text: 'Block his Attack',
			index: 21
		}
	]
},
	{
		title:'Block his Attack',
	text:'He laughs “Great miss but nothing on my scale, im able to destroy cities and bring armies to their knees YOU ARE NOTHING AGAINST ME '+playerName+' ”NOTHING',
	choices:[
		{
			text: 'To be continued',
			index: 22
		}
	]
},
	{
		title:'To be continued',
	text:'That is all of the Sorrow of Kord story today, come back soon to find out what happens to our trusty hero on his quest to learn the knowledge of the Great Champion Pyromancer Kord.',
	choices:[
		{
			text: 'Game over, go back to the beginning to replay the Sorrow of Kord',
			index: 1
		}
	]
},
	{
	title:'Game Over',
	text:'Game Over, go back to the beginning to replay the Sorrow of Kord',
	choices:[
		{
			text: 'Replay Game',
			index: 1
		}
	]
}
]
