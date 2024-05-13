import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PostCard = ({ id, title, body }) => {
  return (
    <div className="border-b-2-50 p-5 m-2">
      <Card className="w-[550px] m-2">
        <CardHeader>
          <CardTitle>
            {title} - ID: {id}
          </CardTitle>
          <CardDescription>Created by Ulises</CardDescription>{" "}
        </CardHeader>
        <CardContent>
          <div>{body}</div>
          <div>
            <span>Comments quantity (1)</span>
          </div>
        </CardContent>{" "}
      </Card>
    </div>
  );
};

export default PostCard;

// <Card className="w-[550px] m-2">
//   <CardHeader>
//     <CardTitle>
//       {title} - ID: {id}
//     </CardTitle>
//     <CardDescription>Created by Ulises</CardDescription>
//   </CardHeader>
//   <CardContent>
//     <div>{body}</div>
//     <div>
//       <span>Comments quantity (1)</span>
//     </div>
//   </CardContent>
{
  /* <CardFooter className="flex justify-between">
        <Button variant="outline">Edit</Button>
        <Button>Delete</Button>
      </CardFooter> */
}
