import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: "o5usc49s",
	dataset: "production",
	apiVersion: "2024-08-22",
	useCdn: true,
	token:
		"skiwp2fyENHjwfnnQpZIHLfqvnOeZytQDtJr5WGh2SiUtqkzrLExK2nXXFNopenv6Wi641OTT26E11i3DjPYrUADuNI5tryeiJQ5IuOvdeuMMm9w40GqgLhU4rCEKQN7JMroXv0okWxjeYoXKSW4S6meCxNUna5Qc1FhpiTKMoW2qXJtc1aX",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
