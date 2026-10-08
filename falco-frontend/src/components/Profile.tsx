const user = {
    name: 'Nicolas Tesla',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAUSUtN5hPrlzTZpzZUVXGCefqATMWt8EgoEj63dmSJcgAyah3yiuU_d6EDpeLb0sAJQjD3wCWonjuCYP9XrJlo1ev23XAj1zEMHArvQ&s=10',
    imageSize: 500
}

export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src= {user.imageUrl}
                alt={'Photo of' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}