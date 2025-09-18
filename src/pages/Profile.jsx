import React from 'react'
import { useGetProfileQuery } from '../services/profileApi'

const Profile = () => {

    const { data } = useGetProfileQuery()

    console.log("profile data", data)

    return (
        <>
            <div className='shadow-2xl p-4'>
                <h1>Profile page</h1>

                <b>First Name:{data?.firstName}</b> <br />
                <b>Last Name:{data?.lastName}</b><br />
                <b>age:{data?.age}</b><br />
                <b>birthDate:{data?.birthDate}</b><br />
                <b>bloodGroup:{data?.bloodGroup}</b><br />
                <p>{data?.university}</p>
            </div>

        </>
    )
}

export default Profile