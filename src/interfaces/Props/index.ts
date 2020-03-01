export default interface Props {
  navigation: any;
  changeCurrentPhrase: Function;
  currentPhrase: string;
  increaseTeamPoint: Function;
  points: Array<number>;
  resetPoints: Function;
}
