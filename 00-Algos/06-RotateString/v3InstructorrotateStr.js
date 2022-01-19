// From Rob - Instructor

function isRotation(s1, s2) {
    if (s1.length !== s2.length || s1 === s2) {
      return false;
    }
    return (s1 + s1).includes(s2);
  }


//  IF s1 + s1 = abcdeabcde, s2 will be found inside.  For ex. if s2 = cdeba, you will find in the bigger group.