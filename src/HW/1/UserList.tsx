type AddressType = {
    street: string
    city: string
};

type UserType = {
    id: number
    name: string
    age:number
    address: AddressType
};

type UserListPropsType = {
    users: Array<UserType>;
};

export const UserList = (props: UserListPropsType) => {
    return (
        <div id={'hw01-users'}>
            <h2>User List:</h2>

            <ul>
                {props.users.map((m) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
                    <li key={m.id} id={`hw01-user-${m.id}`}>
                        <strong>{m.name}</strong> (Age: {m.age})<strong> Address:</strong>
                        {m.address.street}, {m.address.city}
                    </li>
                ))}
            </ul>
        </div>
    );
};
