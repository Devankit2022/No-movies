export default function BgImage() {
    return (
        <div
            style={{
                position: 'fixed',
                top: '0',
                height: '100vh',
                width: '100%',
                opacity: '0.5',
                zIndex: '-10',
            }}
        >
            <img
                src="https://rb.gy/p2hphi"
                alt="not found"
                style={{
                    height: '100%',
                    width: '100%',
                }}
            />
        </div>
    );
}
