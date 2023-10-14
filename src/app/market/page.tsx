import React from 'react'

const products = [

  {
    id: 1,
    name: 'Vegetables Package',
    href: '#',
    imageSrc: 'https://img.freepik.com/free-photo/wooden-box-filled-fresh-vegetables_329181-8749.jpg?w=1380&t=st=1697188341~exp=1697188941~hmac=03dd62b3c14a4974ca03399f7ab77ee6da1cc824c812297455159c9a2cc07f75',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'UGX: 35,000',
    color: 'Around Kampala',
  },
  {
    id: 2,
    name: 'Tomatoes',
    href: '#',
    imageSrc: 'https://img.freepik.com/free-photo/top-view-ripe-fresh-tomatoes-with-water-drops-black-background_141793-3432.jpg?w=1380&t=st=1697189006~exp=1697189606~hmac=e9f97387af3a95f6926d9a839070096f201226ab14403a40c3561a6fa7f3cefb',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'UGX: 3,000',
    color: 'Nakasero Market',
  },
  {
    id: 2,
    name: 'Onions',
    href: '#',
    imageSrc: 'https://img.freepik.com/free-photo/red-onion-whole-isolated-white_146671-19175.jpg?w=1380&t=st=1697189261~exp=1697189861~hmac=8ca6b6875517ce0e4ad3fcf6170d0cd16101fa643cae89b489f41bdb8913517d',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'UGX: 300,000',
    color: 'Nakasero Market',
  },
  // More products...
  {
    id: 1,
    name: 'Kibimba Rice',
    href: '#',
    imageSrc: 'https://img.freepik.com/free-photo/milled-rice-bowl-wooden-spoon-black-cement-floor_1150-20058.jpg?w=1380&t=st=1697189642~exp=1697190242~hmac=81deaa92dcff08348b4a466c66f0f60f133b5482b0b3f1a0f474950e32072b7e',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'UGX: 29,100 - 30,000 per 5kg',
    color: 'Around Kampala',
  },
  {
    id: 2,
    name: 'Irish Potatoes',
    href: '#',
    imageSrc: 'https://img.freepik.com/free-photo/rustic-unpeeled-potatoes-desks_144627-3901.jpg?w=1380&t=st=1697189796~exp=1697190396~hmac=17a48beefb93ef2c80a7c133f5f4a43dfb791b623de7dee587853b3c2b92903e',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'UGX: 200,000 per 100kg',
    color: 'Kisoro Market',
  },
  {
    id: 2,
    name: 'Onions',
    href: '#',
    imageSrc: 'https://img.freepik.com/free-photo/red-onion-whole-isolated-white_146671-19175.jpg?w=1380&t=st=1697189261~exp=1697189861~hmac=8ca6b6875517ce0e4ad3fcf6170d0cd16101fa643cae89b489f41bdb8913517d',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'UGX: 300,000',
    color: 'Nakasero Market',
  },
  {
    id: 1,
    name: 'Vegetables Package',
    href: '#',
    imageSrc: 'https://img.freepik.com/free-photo/wooden-box-filled-fresh-vegetables_329181-8749.jpg?w=1380&t=st=1697188341~exp=1697188941~hmac=03dd62b3c14a4974ca03399f7ab77ee6da1cc824c812297455159c9a2cc07f75',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'UGX: 35,000',
    color: 'Around Kampala',
  },
  {
    id: 2,
    name: 'Tomatoes',
    href: '#',
    imageSrc: 'https://img.freepik.com/free-photo/top-view-ripe-fresh-tomatoes-with-water-drops-black-background_141793-3432.jpg?w=1380&t=st=1697189006~exp=1697189606~hmac=e9f97387af3a95f6926d9a839070096f201226ab14403a40c3561a6fa7f3cefb',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'UGX: 3,000',
    color: 'Nakasero Market',
  },
  {
    id: 2,
    name: 'Onions',
    href: '#',
    imageSrc: 'https://img.freepik.com/free-photo/red-onion-whole-isolated-white_146671-19175.jpg?w=1380&t=st=1697189261~exp=1697189861~hmac=8ca6b6875517ce0e4ad3fcf6170d0cd16101fa643cae89b489f41bdb8913517d',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'UGX: 300,000',
    color: 'Nakasero Market',
  }
]

function page() {

  return (
    <>
    <header className='bg-white shadow'>
    <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
      <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
        Market Access
      </h1>
    </div>
  </header>
    <div>
      

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      
    </div>
    </>
  )
}

export default page
