'use client'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EditUserProfileSchema } from "@/lib/types";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type Props = {};

const ProfileForm = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: 'onChange',
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: '',
      email: '',
    }
  })
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={() => {}}
      >
        <FormField
          disabled={isLoading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">User full name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Name"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
      <form
        className="flex flex-col gap-6"
        onSubmit={() => {}}
      >
        <FormField
          disabled={true}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">User Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  type="email"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
      <Button
        type="submit"
        className="self-start hover:bg-[#2F0068] hover:text-white"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Saving
          </>
        ) : (
          'Save User Settings'
        )}
      </Button>
    </Form>
  );
};

export default ProfileForm;
