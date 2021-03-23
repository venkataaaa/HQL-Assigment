function Card({ user, handleSelect, selected }) {
  return (
    <div
      className={selected.includes(user.first_name) ? "card selected" : "card"}
      onClick={() => handleSelect(user.first_name)}
    >
      <div>
        <img src={user.avatar} alt={user.first_name + " info."} />
      </div>
      <div>
        <p className="name">{user.first_name}</p>
      </div>
      <div>
        <p className="name">{user.last_name}</p>
      </div>
      <div>
        <p className="email">{user.email}</p>
      </div>
    </div>
  );
}

export default Card;
