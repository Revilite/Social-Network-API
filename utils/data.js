//chalkeconomist = 6347604539e6fe26aa017133
//biohazardemployer = 6347604539e6fe26aa017134
//dencrabby = 6347604539e6fe26aa017135
//kapidoes = 6347604539e6fe26aa017136
//longtermcomet = 6347604539e6fe26aa017137

const users = [
  {
    username: "chalkeconomist",
    email: "xadin45585@haizail.com",
    friends: ["6347604539e6fe26aa017134", "6347604539e6fe26aa017135", "6347604539e6fe26aa017136", "6347604539e6fe26aa017137"]
  },
  {
    username: "biohazardemployer",
    email: "bexapo3879@kaimdr.com",
    friends: ["6347604539e6fe26aa017135", "6347604539e6fe26aa017137", "6347604539e6fe26aa017133"]
  },
  {
    username: "dencrabby",
    email: "letaxo4633@imdutex.com",
    friends : ["6347604539e6fe26aa017133", "6347604539e6fe26aa017134"]
  },
  {
    username: "kapidoes",
    email: "rakig92414@imdutex.com",
    friends: ["6347604539e6fe26aa017133", ]
  },
  {
    username: "longtermcomet",
    email: "jevasat724@haizail.com",
    friends: ["6347604539e6fe26aa017133", "6347604539e6fe26aa017135"]
  },

];

const thoughts = [
  {
    thoughtText: "Your belly button is just your old mouth.",
    username: "chalkeconomist",
    reactions:[
      {
        responseBody: "What?",
        username: "longtermcomet"
      },
      {
        responseBody: "You said that already",
        username: "kapidoes"
      }
    ]
  },
  {
    thoughtText: "The person who invented audio recording probably thought it didn't work right when their voice sounded different in the recording.",
    username: "longtermcomet",
    

  },
  {
    thoughtText: "Water is a beverage whose flavor is its temperature.",
    username: "kapidoes",
    reactions:[
      {
        responseBody: "Don’t worry, be happy!",
        username: "longtermcomet"
      },
      {
        responseBody: "Everyone says In-N-Out is the best fast-food restaurant in the country, but honestly, I was very underwhelmed.",
        username: "kapidoes"
      }
    ]
  },
  {
    thoughtText: "If you're 25 years old, you've already been around for more than 10% of American history.",
    username: "biohazardemployer",
   
  },
  {
    thoughtText: "Humans have a 16 hour battery life",
    username: "chalkeconomist"
  },
  {
    thoughtText: "Spacesuits are literally made to protect astronauts from nothing",
    username: "dencrabby",
    reactions:[
      {
        responseBody: "Shape up or ship out!",
        username: "chalkeconomist"
      },
      {
        responseBody: "He feels small next to him.",
        username: "biohazardemployer"
      }
    ]
  },
  {
    thoughtText: "If I throw around large amounts of shredded bread on public property, my proximity to ducks determines whether or not I'm littering",
    username: "chalkeconomist"
  },
  {
    thoughtText: "Watching a graduation ceremony is like sitting through a movie that's entirely end credits.",
    username: "biohazardemployer",
    reactions:[
      {
        responseBody: "This shoe is a size bigger.",
        username: "longtermcomet"
      },
      {
        responseBody: "She had nothing else to say to him.",
        username: "kapidoes"
      }
    ]
  },
  {
    thoughtText: "Most people can eat the same breakfast weeks in a row, without complaint. But the same dinner for weeks? Now, that's just insanity",
    username: "kapidoes"
  },
]

module.exports = { users, thoughts };