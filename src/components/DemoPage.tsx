import React, { useState } from "react";
import Button from "./ui/Button";
import LoadingSpinner from "./ui/spinner";
import { toast } from "./ui/toaster";

export default function DemoPage() {
    const [showSpinner, setShowSpinner] = useState(false);
    const [spinnerSize, setSpinnerSize] = useState<"sm" | "md" | "lg" | "xl">("md");

    const handleShowSpinner = (size: "sm" | "md" | "lg" | "xl") => {
        setSpinnerSize(size);
        setShowSpinner(true);
        // Auto-hide after 3 seconds
        setTimeout(() => setShowSpinner(false), 3000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-10 px-4 bg-background text-foreground">
            <div className="w-full max-w-4xl space-y-12">

                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-accent))] bg-clip-text text-transparent">
                        UI Components Demo
                    </h1>
                    <p className="text-muted-foreground">
                        Interactive demonstration of Toaster notifications and Loading Spinners
                    </p>
                </div>

                {/* Toaster Demo Section */}
                <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">
                        🎉 Toaster Notifications
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6">
                        Click the buttons below to trigger different types of toast notifications
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Button
                            variant="default"
                            onClick={() => toast.success("Operation completed successfully!")}
                            className="bg-green-600 hover:bg-green-700"
                        >
                            ✓ Success Toast
                        </Button>

                        <Button
                            variant="default"
                            onClick={() => toast.error("Something went wrong!")}
                            className="bg-red-600 hover:bg-red-700"
                        >
                            ✗ Error Toast
                        </Button>

                        <Button
                            variant="default"
                            onClick={() => toast.info("Here's some helpful information")}
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            ⓘ Info Toast
                        </Button>

                        <Button
                            variant="default"
                            onClick={() => toast.loading("Processing your request...")}
                            className="bg-gray-600 hover:bg-gray-700"
                        >
                            ⟳ Loading Toast
                        </Button>
                    </div>

                    {/* Additional toast examples */}
                    <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-xs text-muted-foreground mb-3">More examples:</p>
                        <div className="flex flex-wrap gap-3">
                            <Button
                                variant="outline"
                                onClick={() => toast.success("Profile updated!", 2000)}
                                className="text-sm"
                            >
                                Short Duration (2s)
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => toast.error("Network connection failed. Please check your internet.", 6000)}
                                className="text-sm"
                            >
                                Long Message (6s)
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    toast.loading("Uploading files...");
                                    setTimeout(() => toast.success("Upload complete!"), 2500);
                                }}
                                className="text-sm"
                            >
                                Sequential Toasts
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Spinner Demo Section */}
                <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">
                        ⚙️ Loading Spinners
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6">
                        Click the buttons to display spinners in different sizes
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                        <Button
                            variant="outline"
                            onClick={() => handleShowSpinner("sm")}
                        >
                            Small
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => handleShowSpinner("md")}
                        >
                            Medium
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => handleShowSpinner("lg")}
                        >
                            Large
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => handleShowSpinner("xl")}
                        >
                            Extra Large
                        </Button>
                    </div>

                    {/* Spinner Display Area */}
                    <div className="min-h-[200px] bg-muted/30 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                        {showSpinner ? (
                            <div className="text-center space-y-4">
                                <LoadingSpinner size={spinnerSize} />
                                <p className="text-sm text-muted-foreground">
                                    Size: <span className="font-mono font-semibold">{spinnerSize}</span>
                                </p>
                            </div>
                        ) : (
                            <p className="text-muted-foreground text-sm">
                                Click a size button to see the spinner
                            </p>
                        )}
                    </div>

                    {/* All sizes preview */}
                    <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-xs text-muted-foreground mb-4">All sizes preview:</p>
                        <div className="flex items-center justify-around gap-4 bg-muted/20 py-6 rounded-lg">
                            <div className="text-center">
                                <LoadingSpinner size="sm" />
                                <p className="text-xs text-muted-foreground mt-2">Small</p>
                            </div>
                            <div className="text-center">
                                <LoadingSpinner size="md" />
                                <p className="text-xs text-muted-foreground mt-2">Medium</p>
                            </div>
                            <div className="text-center">
                                <LoadingSpinner size="lg" />
                                <p className="text-xs text-muted-foreground mt-2">Large</p>
                            </div>
                            <div className="text-center">
                                <LoadingSpinner size="xl" />
                                <p className="text-xs text-muted-foreground mt-2">XL</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Combined Demo */}
                <div className="bg-gradient-to-br from-primary/5 to-primary-accent/5 border border-border rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">
                        🎨 Combined Demo
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6">
                        Simulate a real-world async operation with spinner and toast feedback
                    </p>

                    <Button
                        variant="default"
                        onClick={() => {
                            setShowSpinner(true);
                            setSpinnerSize("lg");
                            toast.loading("Processing...", 100);

                            setTimeout(() => {
                                setShowSpinner(false);
                                toast.success("Data loaded successfully! 🎉");
                            }, 3000);
                        }}
                        className="w-full sm:w-auto"
                    >
                        Simulate Data Loading
                    </Button>

                    {showSpinner && spinnerSize === "lg" && (
                        <div className="mt-6 flex justify-center">
                            <LoadingSpinner size="lg" />
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
