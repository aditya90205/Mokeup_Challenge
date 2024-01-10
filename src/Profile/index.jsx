
const Profile = () => {
  return (
    <>
    <div className="flex">
    <div className="rounded-full">
        <img width={60} src="userProfile.jpg"  className="rounded-full"  alt="user-profile" />
    </div>
    <div className="flex flex-col mt-1 ml-5">
    <h1 className="font-bold text-xl">Hi Aditya,</h1>
    <p>Welcome back.</p>
    </div>
    </div>
    </>
  )
}

export default Profile