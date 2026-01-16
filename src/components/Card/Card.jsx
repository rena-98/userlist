function Card({ user }) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
     
      <img
        className="w-full h-50 object-contain"
        src={user.image}
        alt={user.firstName}
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-1">{user.firstName} {user.lastName}</h2>
        <p className="text-gray-600 mb-2">{user.username} | {user.role}</p>

        <div className="text-gray-700 text-sm space-y-1">
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Bank Card:</strong> {user.bank?.cardNumber}</p>
          <p><strong>Address:</strong> {user.address?.address}, {user.address?.city}</p>
          <p><strong>University:</strong> {user.university}</p>
          <p><strong>Company:</strong> {user.company?.name}</p>
          <p><strong>Title:</strong> {user.company?.title}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
