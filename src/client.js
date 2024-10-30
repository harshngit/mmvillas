import { createClient } from '@sanity/client'

import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
	projectId: "hkh4p001",
	dataset: 'production',
	apiVersion: '2022-03-07',
	userCdn: true,
	// ignoreBrowserTokenWarning: true,
	token: "skxo33yiCsatVzJOtkdv0gHFN7EukBhvX9Nbx1qE50yehgpRlJKyDIRSvvIXaDn0YEOR2tLtMl9xiZKT1ae2u1q6eqiZq9wNZtFIKjENPqsPgEEbc7roXJRCLEMug946InsinkKOdW9ruMJWrShtcYPtCsSByIkuglj8S2kTUsgYOTB0HCbn"

})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);