package com.example.springaidemo.configurations;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.advisor.MessageChatMemoryAdvisor;
import org.springframework.ai.chat.memory.ChatMemory;
import org.springframework.ai.chat.memory.ChatMemoryRepository;
import org.springframework.ai.chat.memory.MessageWindowChatMemory;
import org.springframework.ai.google.genai.GoogleGenAiChatModel;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ChatClientConfig {
    @Bean
    public ChatClient geminiClient(GoogleGenAiChatModel googleGenAiChatModel, @Qualifier("chatMemoryRepository") ChatMemoryRepository chatMemoryRepository) {
        ChatMemory chatMemory = MessageWindowChatMemory.builder()
                .chatMemoryRepository(chatMemoryRepository)
                .maxMessages(10)
                .build();
        MessageChatMemoryAdvisor chatMemoryAdvisor = MessageChatMemoryAdvisor
                .builder(chatMemory)
                .build();

        ChatClient.Builder builder = ChatClient
                .builder(googleGenAiChatModel)
                .defaultAdvisors(List.of(chatMemoryAdvisor))
                .defaultSystem("You are a professional nutritionist.");
        return builder.build();
    }
}
