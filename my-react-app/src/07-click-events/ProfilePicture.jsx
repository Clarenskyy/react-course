function ProfilePicture(){

    const imageUrl = 'https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/471126570_1844716686300868_8732204671274332646_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHiFklGRFt7bu1FI3M8otSzdvBbxQztqqF28FvFDO2qoeXFZEcxtCNej4WclyYy8uNFzZTAYondGiQ1Uq44a_h2&_nc_ohc=_quf0jALKhcQ7kNvgGPeefL&_nc_zt=23&_nc_ht=scontent.fmnl9-1.fna&_nc_gid=AAvuKRlgkCIX9DeNuKoYmiO&oh=00_AYDt4aNw6QcLtgOPcClRLH7kj1MV2VLCe7LGevIhREYtYQ&oe=677292CB';

    const handleClick = (e) => console.log('YUMMY!');

    return(
        <img onClick={(e) => {handleClick(e)}} src="https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/471126570_1844716686300868_8732204671274332646_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHiFklGRFt7bu1FI3M8otSzdvBbxQztqqF28FvFDO2qoeXFZEcxtCNej4WclyYy8uNFzZTAYondGiQ1Uq44a_h2&_nc_ohc=_quf0jALKhcQ7kNvgGPeefL&_nc_zt=23&_nc_ht=scontent.fmnl9-1.fna&_nc_gid=AAvuKRlgkCIX9DeNuKoYmiO&oh=00_AYDt4aNw6QcLtgOPcClRLH7kj1MV2VLCe7LGevIhREYtYQ&oe=677292CB" alt="" />
    )
}

export default ProfilePicture