import firebase from "./firebase";
export const FirebasePractice = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("working");
    const itemsRef = firebase.database().ref("projects/0/projectDetails/users/0/firstName");

    itemsRef.on("value", (snapshot) => {
      let items = snapshot.val();
      console.log(items);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Firebase practice</div>
        <button type="submit">Fetch data</button>
      </form>
    </div>
  );
};
