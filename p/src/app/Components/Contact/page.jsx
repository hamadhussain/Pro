'use client'
import React from "react";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  return (
    <div name="test3" className=" h-screen flex  justify-center items-center grad ">
      <div className="c">
          <Card className="w-[300px] sm:border-b-gray-900 opacity-100">
            <CardHeader className="">
              <CardTitle className="opacity-1">Contact Us</CardTitle>
              <CardDescription className="capitalize">
                To Connect your Mind with us.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter Name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Message</Label>
                    <Input id="name" placeholder="Give Your Message Here" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              {/* <Button variant="outline">Cancel</Button> */}
              <Button>Send</Button>
            </CardFooter>
          </Card>
          {/* <Image src="..." alt="Image" className="rounded-md object-cover" /> */}
      </div>
    </div>
  );
};

export default Page;
