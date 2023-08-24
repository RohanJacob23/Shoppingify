"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import useAddItem from "@/zustand/newItem";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(20, { message: "Name must be at most 20 characters" }),
  note: z.string().optional(),
  image: z.string().optional(),
  category: z.string({ required_error: "Please select a category" }),
});

export default function AddNewItem() {
  const [showAddItem, setShowAddItem] = useAddItem((state) => [
    state.showAddItem,
    state.setShowAddItem,
  ]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      note: "",
      image: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <section
      className={`fixed right-0 top-0 flex flex-col bg-white h-screen w-64 md:w-96 pt-6 md:pt-11 px-10 transition-transform duration-500 ease-in-out ${
        showAddItem ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="font-medium">
        <h1 className="text-2xl">Add a new item</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* name input */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a name"
                      className="h-12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* note input */}
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel>Note (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter a note"
                      {...field}
                      className="scrollArea resize-none h-28"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* photo url input */}
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel>Image (optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a name"
                      {...field}
                      className="h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* category select */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Fruit and vegetables">
                        Fruit and vegetables
                      </SelectItem>
                      <SelectItem value="Meat and fish">
                        Meat and fish
                      </SelectItem>
                      <SelectItem value="Beverages">Beverages</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between space-x-11">
              <Button
                variant="outline"
                type="button"
                onClick={() => setShowAddItem()}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-[#F9A109]">
                Save
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
