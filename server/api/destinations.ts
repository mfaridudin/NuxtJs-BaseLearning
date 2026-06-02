const destinations = [
    {
        id: 'paris',
        name: 'Menara Eiffel',
        location: 'Prancis',
        description: 'Menara besi ikonik yang dibangun pada tahun 1889, terletak di Champ de Mars di Paris. Menjadi simbol romantis dunia dan destinasi wajib para traveler.'
    },
    {
        id: 'kyoto',
        name: 'Fushimi Inari',
        location: 'Jepang',
        description: 'Kuil Shinto penting di Kyoto selatan. Terkenal dengan ribuan gerbang torii (Senbon Torii) berwarna oranye terang yang membentuk jalur mendaki gunung Inari.'
    },
    {
        id: 'bali',
        name: 'Pura Uluwatu',
        location: 'Indonesia',
        description: 'Pura laut yang megah yang berdiri di atas tebing setinggi 70 meter yang menjorok ke Samudra Hindia, terkenal dengan pemandangan matahari terbenam dan pertunjukan tari Kecak.'
    }
]

export default defineEventHandler(async (event) => {
    const method = getMethod(event)

    if (method === 'GET') {
        return {
            statusCode: 200,
            message: 'Berhasil mengambil semua data destinasi',
            data: destinations
        }
    }

    if (method === 'POST') {
        const body = await readBody(event)

        if (!body.name || !body.location) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Bad Request',
                message: 'Nama destinasi dan lokasi wajib diisi!'
            })
        }

        const newDestination = {
            id: body.name.toLowerCase().trim().replace(/\s+/g, '-'),
            name: body.name,
            location: body.location,
            description: body.description || 'Belum ada deskripsi untuk destinasi ini.'
        }

        destinations.push(newDestination)

        return {
            statusCode: 201,
            message: 'Destinasi baru berhasil ditambahkan!',
            data: newDestination
        }
    }
})