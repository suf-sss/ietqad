import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans rtl">
      <Head>
        <title>موقع اعتقاد</title>
      </Head>
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">مرحبًا بكم في منصة اعتقاد</h1>
        <p className="text-lg text-gray-600 text-center">منصة علمية في العقيدة، الأديان، الفرق والمذاهب الفكرية</p>
      </main>
    </div>
  )
}
