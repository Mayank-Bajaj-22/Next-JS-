"use client";
export default function Error({ error }) {
    // console.dir(error);
    // console.log(error.digest)
    // console.log(error.message)
    return (
        <div>
            <p>Something went wrong</p>
        </div>
    );
}

// development mode me run karte hai jab error.message me apan ne jo error throw kiya hai vo display ho raha hai 
// production mode me error.message jo apan ne bheja vo nhi aa raha
// kyuki vo server error hai toh apan ko client tak nhi bhejna chaiye, so apan isko error.message ko ui me nhi dikhayenge , server me console me error show hoga 
