import Image from 'next/image';

export default function User({ user, showAllDetails }) {
  return (
    <article>
      {showAllDetails ? (
        <div className="flex items-start">
          <div>
            <Image src={user.avatar} height={40} width={40} alt="user avatar" />
          </div>
          <div className="flex flex-col mb-5 w-90 mx-auto">
            <p>user name : {user.name}</p>
            <p>user Email : {user.email}</p>
          </div>
        </div>
      ) : (
        <p className="text-center">{user.name}</p>
      )}
    </article>
  );
}
