import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);
    const updatedUser = {name, email};

    fetch(`http://localhost:5000/users/${loadedUser._id}`,{
        method: 'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.matchedCount >0){
            alert('user update successfully')
        }
    })
  };

  return (
    <div>
      <h1>Update information of {loadedUser.name}</h1>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
        <br />
        <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
        <br />
        <input type="submit" value="add value" />
      </form>
    </div>
  );
};

export default Update;
