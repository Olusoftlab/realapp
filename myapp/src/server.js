import { createServer, Model } from "miragejs"
import ImageOne from "./images/download (5).jpg"
import ImageTwo from "./images/download (6).jpg"
import ImageThree from "./images/download (7).jpg"
import ImageFour from "./images/download (8).jpg"
import ImageFive from "./images/download (9).jpg"
import ImageSix from "./images/download (10).jpg"



createServer({


    models: { vans: Model },

    seeds(server) {


        server.create("van", {

            id: 1, show: ImageOne, name: "Dog", class: "mammal", pricing: "$80000"

        })

        server.create("van", {

            id: 2, show: ImageTwo, name: "cat", class: "mammal", pricing: "$60000"


        })

        server.create("van", {

            id: 3, show: ImageThree, name: "Lion", class: "Mammal", pricing: "$10000"

        })

        server.create("van", {

            id: 4, show: ImageFour, name: "tiger", class: "mammal", pricing: "$20000"

        })

        server.create("van", {

            id: 5, show: ImageFive, name: "goat", class: "mammal", pricing: "$40000"
        })

        server.create("van", {

            id: 6, show: ImageSix, name: "zebra", class: "mammal", pricing: "$10000"
        })

    }

    ,

    routes() {

        this.namespace = "api"
        this.logging = false



        this.get("/vans", (schema, request) => {

            return schema.vans.all()

            // return { "message": "there was an error fetching data" }


        })

        this.get("/vans/:id", (schema, request) => {

            const id = request.params.id
            return schema.vans.find(id)


        })


    }




})