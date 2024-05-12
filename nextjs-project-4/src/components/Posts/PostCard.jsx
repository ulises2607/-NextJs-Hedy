"use client"; // Colócala al principio del archivo

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PostCard = ({ id, title, user, description, commentsQuantity }) => {
  return (
    <Card className="w-[550px] m-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Created by {user}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>{description}</div>
        <div>
          <span>Comments quantity ({commentsQuantity})</span>
        </div>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Edit</Button>
        <Button>Delete</Button>
      </CardFooter> */}
    </Card>
  );
};

export default PostCard;
