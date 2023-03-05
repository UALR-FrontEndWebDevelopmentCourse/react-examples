function Item({name, isPacked}) {
    return (
        <li className="item">
            {isPacked ? <del>{name + ' ✔'}</del> : name}
        </li>
    );
}

export default Item;