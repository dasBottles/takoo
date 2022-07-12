export default function UserPage({ }) {
  return (
    <main>
        <Link 
            prefetch={false} 
            href={{
                pathname: '/[username',
                query: { username: 'dasani' },
            }}>
                <a>dasani's profile</a>
        </Link>

    </main>
  )
}