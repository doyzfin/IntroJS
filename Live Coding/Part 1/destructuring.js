const profile = {
    name: "Bagus",
    hobby: {
      hobby1: "menyanyi",
      hobby2: "menari",
      hobby3: {
        hobby31: "bermain",
      },
    },
    sister: {
      sister1: "Ana",
      sister2: "Bella",
    },
  };
  
  const { hobby1, hobby2 } = profile.hobby;
  const { sister1, sister2 } = profile.sister;
  const { hobby31: hobbyUtama } = profile.hobby.hobby3;
  console.log(profile);
  