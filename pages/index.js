import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import Link from "next/link";
const axios = require("axios").default;

const index = ({ hero }) => {
  return (
    <div className="container my-4">
      <h1 className="display-2">Superhero Identity Manager</h1>
      <div className="my-3">
        <MDBRow className="mx-2 d-flex justify-content-center">
          {hero.map((value) => {
            return (
              <MDBCard
                className="border border-2 my-1 mx-1"
                style={{ maxWidth: "22rem" }}
                key={value._id}
              >
                <MDBCardBody>
                  <MDBCardTitle>{value.superhero}</MDBCardTitle>
                  <MDBCardText>Reveal Identity</MDBCardText>

                  <Link href="/">
                    <MDBBtn className="mx-2 bg-success">Edit Hero</MDBBtn>
                  </Link>

                  <Link href={`/api/hero/${value._id}`}>
                    <MDBBtn>View Details</MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            );
          })}
        </MDBRow>
      </div>
    </div>
  );
};

// export async function getStaticProps(context)
export const getStaticProps = async (context) => {
  console.log(context);
  const res = await axios("http://localhost:3000/api/hero");
  const { hero } = res.data;
  return {
    props: {
      hero,
      message: "Hello Saikat",
    },
  };
};

// ! Older Way Of Doing
// index.getInitialProps = async() => {
//   const res = await axios('http://localhost:3000/api/hero')
//   console.log(res.data.hero);
//   return {data : res.data, message : res.data.hero[2].realname}
// }

export default index;
