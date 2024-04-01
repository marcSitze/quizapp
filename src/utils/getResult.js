const getResult = (number) => {
  switch (number) {
    case 1:
      return 'CARACTERISTIQUES PERSONNES LEGERES.';
    case 2:
      return 'CARACTERISTIQUES PERSONNES RIGOUREUSES.';
    case 3:
      return 'CARACTERISTIQUES PERFECTIONNISTES.';
    default:
      return null;
  }
};

export default getResult;
